# Generated by Django 2.1.3 on 2018-11-28 13:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0005_kontakt'),
    ]

    operations = [
        migrations.AddField(
            model_name='kontakt',
            name='facebook',
            field=models.CharField(default='facebook.com', max_length=200),
        ),
        migrations.AddField(
            model_name='kontakt',
            name='instagram',
            field=models.CharField(default='instagram.com', max_length=200),
        ),
        migrations.AlterField(
            model_name='kontakt',
            name='email',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='kontakt',
            name='nr_tel',
            field=models.CharField(max_length=20, null=True),
        ),
    ]