# Generated by Django 4.0.4 on 2022-05-01 23:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='comments',
            new_name='Comment',
        ),
        migrations.RenameModel(
            old_name='posts',
            new_name='Post',
        ),
        migrations.RenameModel(
            old_name='replies',
            new_name='Reply',
        ),
        migrations.RenameModel(
            old_name='users',
            new_name='User',
        ),
    ]
