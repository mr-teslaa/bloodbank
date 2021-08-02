#   module for saving image into the server
import os
import secrets
from PIL import Image

from flask import render_template
from flask import url_for
from flask import flash
from flask import redirect
from flask import request

from bloodbank import app
from bloodbank import bcrypt
from bloodbank import mail
from bloodbank.forms import RegistrationForm
from bloodbank.forms import LoginForm
from bloodbank.forms import editprofileForm
from bloodbank.forms import RequestResetForm
from bloodbank.forms import ResetPasswordForm

from bloodbank.models import db
from bloodbank.models import User

from flask_login import login_user
from flask_login import logout_user
from flask_login import login_required
from flask_login import current_user

from flask_mail import Message


@app.route('/')
def index():
    return render_template('index.html')


def save_profile_picture(form_picture):
    random_hex = secrets.token_hex(8)
    _, f_ext = os.path.splitext(form_picture.filename)
    picture_fn = random_hex + f_ext
    picture_path = os.path.join(app.root_path, 'static/profile_pics', picture_fn)

    output_size = (1080, 1080)
    i = Image.open(form_picture)
    i.thumbnail(output_size)
    i.save(picture_path)

    return picture_fn


@app.route('/register', methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))

    form=RegistrationForm()
    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        if form.picture.data:
            profile_picture = save_profile_picture(form.picture.data)
            user = User(name=form.name.data, username=form.username.data,\
                        bloodgroup=form.bloodgroup.data,\
                        email=form.email.data, password=hashed_password,\
                        lastdate=form.lastdate.data, numberofdonation=form.numberofdonation.data,\
                        mobile=form.mobile.data, division=request.form.get('division'),\
                        district=request.form.get('district'), upazila=request.form.get('upazila'),\
                        image_file=profile_picture)
        else:
            user = User(name=form.name.data, username=form.username.data,\
                        bloodgroup=form.bloodgroup.data,\
                        email=form.email.data, password=hashed_password,\
                        lastdate=form.lastdate.data, numberofdonation=form.numberofdonation.data,\
                        mobile=form.mobile.data, division=request.form.get('division'),\
                        district=request.form.get('district'), upazila=request.form.get('upazila') )
        db.session.add(user)
        db.session.commit()
        flash('Your account has been created! You are now able to log in', 'success')
        return redirect(url_for('login'))
    return render_template('register.html', form=form)



@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))

    form=LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(mobile=form.mobile.data).first()
        if user and bcrypt.check_password_hash(user.password, form.password.data):
            login_user(user, remember=form.remember.data)
            next_page = request.args.get('next')
            flash('Good to see you again', 'success')
            return redirect(next_page) if next_page else redirect(url_for('dashboard'))
        else:
            flash('Login Unsuccessful. Please check email and password', 'danger')
    return render_template('login.html', form=form)


@app.route('/dashboard')
@login_required
def dashboard():
    image_file = url_for('static', filename='profile_pics/' + current_user.image_file)
    return render_template('dashboard.html', image_file=image_file)

@app.route('/dashboard/profile/edit', methods=['GET', 'POST'])
@login_required
def editprofile():
    form=editprofileForm()
    if form.validate_on_submit():
        if form.picture.data:
            profile_picture = save_profile_picture(form.picture.data)
            current_user.image_file = profile_picture
        current_user.name = form.name.data
        current_user.email = form.email.data
        current_user.mobile = form.mobile.data
        current_user.lastdate = form.lastdate.data
        current_user.numberofdonation = form.numberofdonation.data
        db.session.commit()
        flash('Your account has been updated!', 'success')
        return redirect(url_for('dashboard'))
    elif request.method == 'GET':
        form.name.data = current_user.name
        form.email.data = current_user.email
        form.mobile.data = current_user.mobile
        form.lastdate.data = current_user.lastdate
        form.numberofdonation.data = current_user.numberofdonation
    image_file = url_for('static', filename='profile_pics/' + current_user.image_file)
    return render_template('editprofile.html', image_file=image_file, form=form)



@app.route('/dashboard/profile/edit', methods=['GET', 'POST'])
@login_required
def deleteprofile():
    return "DELETE PROFILE"


@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('login'))



@app.route('/demo/db')
def demoDB():
    users = User.query.all()
    return render_template('demoDB.html', users=users)



@app.route('/profile/<string:username>', methods=['GET', 'POST'])
def profile(username):
    user = User.query.filter_by(username=username).first_or_404()
    return render_template('profile.html', user=user)



@app.route('/about')
def about():
    return render_template('about.html')





#   reset password and set new password
def send_reset_email(user):
    token = user.get_reset_token()
    msg = Message('Password Reset Request',
                  sender='OurBloodBank.com',
                  recipients=[user.email])
    msg.body = f'''To reset your password, visit the following link:
{url_for('reset_token', token=token, _external=True)}
If you did not make this request then simply ignore this email and no changes will be made.
'''
    mail.send(msg)


@app.route("/reset_password", methods=['GET', 'POST'])
def reset_request():
    if current_user.is_authenticated:
        return redirect(url_for('home'))
    form = RequestResetForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        send_reset_email(user)
        flash('An email has been sent with instructions to reset your password.', 'info')
        return redirect(url_for('login'))
    return render_template('reset_request.html', form=form)


@app.route("/reset_password/<token>", methods=['GET', 'POST'])
def reset_token(token):
    if current_user.is_authenticated:
        return redirect(url_for('home'))
    user = User.verify_reset_token(token)
    if user is None:
        flash('That is an invalid or expired token', 'warning')
        return redirect(url_for('reset_request'))
    form = ResetPasswordForm()
    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user.password = hashed_password
        db.session.commit()
        flash('Your password has been updated! You are now able to log in', 'success')
        return redirect(url_for('login'))
    return render_template('reset_token.html', form=form)