import connexion
from flask import render_template

app = connexion.FlaskApp(__name__)
app.add_api('swagger/events.yaml',base_path="/events")
flask_app =app.app


@flask_app.route("/demo", defaults={"path": ""})
@flask_app.route("/demo/", defaults={"path": ""})
@flask_app.route("/demo/<path:path>")
def demo(
    path,
):
    return render_template("demo.jinja2")

app.run(port=8081,debug=True)

