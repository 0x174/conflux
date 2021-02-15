'''
--------------------------------------------------------------------------------
Description:

Roadmap:

Written by W.R. Jackson <wrjackso@bu.edu>, DAMP Lab 2021
--------------------------------------------------------------------------------
'''
import datetime
import uuid
from typing import (
    Optional,
)

from pydantic import BaseModel


# Shared properties
class ProtocolBase(BaseModel):
    # Instantiation related metadata
    uuid: str = str(uuid.uuid4())
    creation_timestamp: datetime.datetime = str(datetime.datetime.utcnow())

    # On Creation data-fields
    protocol_name: Optional[str] = None
    creator_id: Optional[int] = None
    author: Optional[str] = None
    organization: Optional[str] = None

    # On Update data-fields
    historical_protocols: Optional[str] = None


# ----------------------------------- Create -----------------------------------
# Properties to receive via API on creation
class ProtocolCreate(ProtocolBase):
    protocol_name: str
    author: str
    organization: str


# ----------------------------------- Update -----------------------------------
class ProtocolUpdate(ProtocolBase):
    protocol_name: Optional[str] = None

# -------------------------------- Finalization --------------------------------
class ProtocolInDatabase(ProtocolBase):
    id: Optional[int] = None

    class Config:
        orm_mode = True


# Additional properties to return via API
class Protocol(ProtocolInDatabase):
    pass


# Additional properties stored in DB
class ProtocolInDB(ProtocolInDatabase):
    hashed_password: str

if __name__ == '__main__':
    thing = ProtocolBase()
    print(thing.uuid)
