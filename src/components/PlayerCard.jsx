import React from 'react';
import '../styles/PlayerCard.scss';

export const PlayerCard = ({player, handleOpen, inputText}) => {

    return (
        <>
            <div className='card' onClick={() => handleOpen(player.id)}>
                <div className='card__img'>
                    <img src={player.picture} alt={player.lastname}/>
                </div>
                <div className='card__col'>
                    <div className='card__col--title'>
                        {player.firstname} {player.lastname}
                    </div>
                    <div className="card__col--body">
                        <div className='col'>
                            <div className='card__col--body__subtitle'>
                                Rank
                            </div>
                            <div className='card__col--body__info'>
                                #{player.data.rank}
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card__col--body__subtitle'>
                                Points
                            </div>
                            <div className='card__col--body__info'>
                                {player.data.points}
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card__col--body__subtitle'>
                                Country
                            </div>
                            <div className='card__col--body__info'>
                                {player.country.code}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
