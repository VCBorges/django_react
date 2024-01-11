from typing import TypeVar

from django.forms import Form

from rich import print

T = TypeVar('T', bound=Form)


def get_form_errors(form: T) -> dict[dict[str, list[str]]]:
    return {'errors': form.errors}
