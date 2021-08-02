from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms import IntegerField
from wtforms import PasswordField
from wtforms import SubmitField
from wtforms import BooleanField
from wtforms import SelectField

from wtforms.fields.html5 import DateField
from flask_wtf.file import FileField
from flask_wtf.file import FileAllowed
from wtforms.validators import DataRequired
from wtforms.validators import Length
from wtforms.validators import Email
from wtforms.validators import EqualTo
from wtforms.validators import ValidationError

from bloodbank.models import User


class RegistrationForm(FlaskForm):
    name = StringField(
        'Full Name',
        validators = [ DataRequired() ]
    )

    username = StringField(
        'Username (Only a-z, A-Z, 0-9 and - are allowed in username)',
        validators = [ DataRequired() ]
    )

    bloodgroup = SelectField(
        'Blood Group',
        choices = [
            ('A+(ive)', 'A+(ive)' ),
            ('A-(ive)', 'A-(ive)' ),
            ('B+(ive)', 'B+(ive)' ),
            ('B-(ive)', 'B-(ive)' ),
            ('O+(ive)', 'O+(ive)' ),
            ('O-(ive)', 'O-(ive)' ),
            ('AB+(ive)', 'AB+(ive)' ),
            ('AB-(ive)', 'AB-(ive)' )
        ]
    )

    email = StringField(
        'Email',
        validators = [
            DataRequired(),
            Email()
        ]
    )

    mobile = IntegerField(
        'Phone Number',
        validators = [
            DataRequired()
        ]
    )

    lastdate = DateField('Last date of blood donation', format='%Y-%m-%d')

    numberofdonation = IntegerField( 'How many times I have given blood' )

    password = PasswordField(
        'Password',
        validators = [ DataRequired() ]
    )

    confirm_password = PasswordField(
        'Confirm Password',
        validators = [
            DataRequired(),
            EqualTo('password')
        ]
    )

    picture = FileField(
        'Profile Picture',
        validators = [ FileAllowed(['png','jpeg','jpg']) ]
    )

    submit = SubmitField('Create an account')


    def validate_mobile(self, mobile):
        user = User.query.filter_by(mobile=mobile.data).first()
        if user:
            raise ValidationError('That mobile number is taken. Please choose a different one.')

    def validate_email(self, email):
        user = User.query.filter_by(email=email.data).first()
        if user:
            raise ValidationError('That email is taken. Please choose a different one.')


class LoginForm(FlaskForm):
    mobile = IntegerField(
        'Phone Number',
        validators = [
            DataRequired()
        ]
    )

    password = PasswordField(
        'Password',
        validators = [
            DataRequired()
        ]
    )

    remember = BooleanField('Remember Me')

    submit = SubmitField('Login')



class editprofileForm(FlaskForm):

    name = StringField( 'Full Name' )

    email = StringField(
        'Email',
        validators = [ Email() ]
    )

    mobile = IntegerField( 'Phone Number' )

    lastdate = DateField('Last date of blood donation', format='%Y-%m-%d')

    numberofdonation = IntegerField( 'How many times I have given blood' )

    password = PasswordField( 'New Password' )

    confirm_password = PasswordField(
        'Retype New Password',
        validators = [ EqualTo('password') ]
    )

    picture = FileField(
        'Profile Picture',
        validators = [ FileAllowed(['png','jpeg','jpg']) ]
    )

    submit = SubmitField('Update account')




class RequestResetForm(FlaskForm):

    email = StringField(
        'Email',
        validators = [
            DataRequired(),
            Email()
        ]
    )

    submit = SubmitField('Request Password Reset')

    def validate_email(self, email):
        user = User.query.filter_by(email=email.data).first()
        if user is None:
            raise ValidationError('There is no account with that email. You must register first.')


class ResetPasswordForm(FlaskForm):

    password = PasswordField(
        'Password',
        validators = [ DataRequired() ]
    )

    confirm_password = PasswordField(
        'Confirm Password',
        validators = [
            DataRequired(),
            EqualTo('password')
        ]
    )

    submit = SubmitField('Reset Password')