"""empty message

Revision ID: 35e0ce852d53
Revises: 58af24be55a6
Create Date: 2024-02-09 03:43:27.952417

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '35e0ce852d53'
down_revision = '58af24be55a6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('rutas', schema=None) as batch_op:
        batch_op.add_column(sa.Column('imagen', sa.String(length=400), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('rutas', schema=None) as batch_op:
        batch_op.drop_column('imagen')

    # ### end Alembic commands ###