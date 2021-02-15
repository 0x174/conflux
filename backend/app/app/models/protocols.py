'''
--------------------------------------------------------------------------------
Description:

Roadmap:

Written by W.R. Jackson <wrjackso@bu.edu>, DAMP Lab 2020
--------------------------------------------------------------------------------
'''

from typing import TYPE_CHECKING

from app.db.base_class import Base
from sqlalchemy import Column, String, INTEGER

if TYPE_CHECKING:
    from .protocols import Protocol  # noqa: F401


class Protocol(Base):
    # Instantiation related metadata
    uuid = Column(str, unique=True, primary_key=True, index=True)
    creation_timestamp = Column(String, index=True)

    # On Creation data-fields
    protocol_name = Column(String, index=True, nullable=False)
    creator_id = Column(INTEGER, index=True)
    author = Column(String, nullable=False)
    organization = Column(String, default=True)

    # On Update data-fields
    historical_protocols = Column(String, default=False)
