import os
from fastapi import APIRouter
from typing import Union
from fastapi import Header, HTTPException, status
from dotenv import load_dotenv
from business.fixtures import get_fixtures_from_json
from business.validators import validate_api_key
load_dotenv()

league_id = os.getenv("LEAGUE_ID")

fixtures_router = APIRouter()


@fixtures_router.get(f"/fixtures/league/{league_id}", tags=["fixtures"])
async def get_fixtures(toto_game_API_Key: Union[str, None] = Header(default=None)) -> dict:
    """Get all fixtures for league"""
    valid = validate_api_key(toto_game_API_Key)
    if not valid:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="incorrect api key"
        )

    fixtures = get_fixtures_from_json()
    return {"api": {"fixtures": fixtures}}
