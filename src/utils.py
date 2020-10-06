#!/usr/bin/env python
# -*- coding: utf-8 -*-

""" Utility functions
"""


def string_to_bool(value):
    return value.lower() in ("yes", "true", "t", "1", "y")
