import os

import pandas as pd
import numpy as np

from flask import Flask, jsonify, render_template
app = Flask(__name__, static_url_path='')


@app.route("/")
def index():
    """Return the homepage."""
    return render_template('page2.html')


@app.route('/names')
def names():
    """Return a list of sample names."""

    df_train = pd.read_json('train.json')
    df_cuisines = df_train['cuisine'].unique()

    df_cuisines.set_index('otu_id', inplace=True)

    # Return a list of the column names (sample names)
    return jsonify(list(df_cuisines))


if __name__ == "__main__":
    app.run(debug=True)

