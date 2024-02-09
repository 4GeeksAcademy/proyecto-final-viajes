"""empty message

Revision ID: 4315665be9ad
Revises: 44b0c3eb4527
Create Date: 2024-02-08 02:40:31.174179

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4315665be9ad'
down_revision = '44b0c3eb4527'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('rutas', schema=None) as batch_op:
        batch_op.alter_column('nombre_de_ruta',
               existing_type=sa.VARCHAR(length=45),
               type_=sa.Integer(),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('rutas', schema=None) as batch_op:
        batch_op.alter_column('nombre_de_ruta',
               existing_type=sa.Integer(),
               type_=sa.VARCHAR(length=45),
               existing_nullable=False)

    # ### end Alembic commands ###