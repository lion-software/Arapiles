#!/usr/bin/env python
# -*- coding: utf-8 -*-

""" Main project routine
"""

import os

from flask import Flask, send_from_directory

from utils import string_to_bool

app = Flask(__name__, static_folder="front/public")

debug_mode = string_to_bool(os.environ["PRODUCTION"])

@app.route("/")
def serve():
    """ Serves React App """
    return send_from_directory(app.static_folder, "index.html")


@app.route("/<path:path>")
def static_proxy(path):
    """ Static folder serve """
    file_name = path.split("/")[-1]
    dir_name = os.path.join(app.static_folder, "/".join(path.split("/")[:-1]))
    if os.path.isdir(os.path.join(dir_name, file_name)):
        file_name += "/index.html"
    return send_from_directory(dir_name, file_name)


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=3000,
        debug=debug_mode
    )
