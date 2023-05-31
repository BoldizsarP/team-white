import connexion

app = connexion.FlaskApp(__name__)
app.add_api('swagger/events.yaml')

app.run(port=8080)