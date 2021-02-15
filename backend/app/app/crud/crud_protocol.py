'''
--------------------------------------------------------------------------------
Description:

Roadmap:

Written by W.R. Jackson <wrjackso@bu.edu>, DAMP Lab 2020
--------------------------------------------------------------------------------
'''
from typing import List

from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session

from app.crud.base import CRUDBase
from app.models.protocols import Protocol
from app.schemas.protocols import ProtocolCreate, ProtocolUpdate


class CRUDProtocol(CRUDBase[Protocol, ProtocolCreate, ProtocolUpdate]):
    def create_with_owner(
            self,
            db: Session,
            *,
            obj_in: ProtocolCreate,
            creator_id: int
    ) -> Protocol:
        '''

        Args:
            db:
            obj_in:
            creator_id:

        Returns:

        '''
        obj_in_data = jsonable_encoder(obj_in)
        db_obj = self.model(**obj_in_data, creator_id=creator_id)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def get_multi_by_owner(
            self,
            db: Session,
            *,
            creator_id: int,
            skip: int = 0,
            limit: int = 100,
    ) -> List[Protocol]:
        '''

        Args:
            db:
            creator_id:
            skip:
            limit:

        Returns:

        '''
        return (
            db.query(self.model)
                .filter(Protocol.creator_id == creator_id)
                .offset(skip)
                .limit(limit)
                .all()
        )


protocol = CRUDProtocol(Protocol)
