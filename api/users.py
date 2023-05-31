from database import Session
from models import User
from flask import request
import json

def create_user():
    with Session() as session:
        data = request.get_json()
        user = User(**data)
        session.add(user)
        session.commit()
        return {'message': 'User created successfully'}, 201

def get_all_users():
    with Session() as session:
        users = session.query(User).all()
        user_list = []
        for user in users:
            user_data = {'username': user.username, 'email': user.email, 'role': user.role}
            user_list.append(user_data)
        return user_list, 200

def get_user_by_id(userId):
    with Session() as session:
        user = session.query(User).get(userId)
        if user:
            return {'username': user.username, 'email': user.email, 'role': user.role}, 200
        else:
            return {'message': 'User not found'}, 404

def update_user_by_id(userId):
    with Session() as session:
        user = session.query(User).get(userId)
        if user:
            data = request.get_json()
            user.username = data['username']
            user.email = data['email']
            user.role = data['role']
            session.commit()
            return {'message': 'User updated successfully'}, 200
        else:
            return {'message': 'User not found'}, 404
