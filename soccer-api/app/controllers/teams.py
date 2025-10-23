from fastapi import APIRouter
from typing import Union
from fastapi import Header, HTTPException, status
from business.teams import get_teams_from_json
from business.validators import validate_api_key

teams_router = APIRouter()


@teams_router.get("/teams/search/Netherlands", tags=["teams"])
async def get_teams(toto_game_API_Key: Union[str, None] = Header(default=None)) -> dict:
    """Get all teams from the Netherlands"""
    valid = validate_api_key(toto_game_API_Key)
    if not valid:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="incorrect api key"
        )

    teams = get_teams_from_json()
    return {"api": {"teams": teams}}
