"""adding NUMBER OF BLOOD DONATION and DATE OF LAST DONATION

Revision ID: 8c5999082be5
Revises: 
Create Date: 2021-07-23 02:24:49.337256

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8c5999082be5'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('lastdate', sa.String(length=20), nullable=True))
    op.add_column('user', sa.Column('numberofdonation', sa.String(length=1000), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'numberofdonation')
    op.drop_column('user', 'lastdate')
    # ### end Alembic commands ###
