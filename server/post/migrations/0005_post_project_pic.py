# Generated by Django 4.0.2 on 2022-02-27 01:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0004_alter_post_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='project_pic',
            field=models.ImageField(blank=True, null=True, upload_to='media/'),
        ),
    ]
