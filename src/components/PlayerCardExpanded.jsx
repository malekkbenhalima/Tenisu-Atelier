import React from 'react';

import '../styles/PlayerCardExpanded.scss';

export const PlayerCardExpanded = React.forwardRef(({player}, ref) => {

    return (
        <div className='player-card-expanded' ref={ref}>
            <section className='bottom player-card-expanded__container'>
                <div className='player-card-expanded__container--col'>
                    <img src={player.picture} alt={player.firstname} className='player-picture'/>
                </div>
                <div className='player-card-expanded__container--col'>
                    <div className="header">
                        <div className='header__col'>
                            <div className="player-name">
                                <div className='player-name__firstname'>{player.firstname}</div>
                                <div className="player-name__lastname">{player.lastname}</div>
                            </div>
                        </div>
                        <div className="header__col flag">
                            <div className='flag__picture'>
                                <img src={player.country.picture} alt={player.country.code}/>
                            </div>
                            <div className='flag__code'>
                                {player.country.code}
                            </div>
                        </div>
                    </div>
                    <div className="player-info-container">
                        <div className='col'>
                            <div className='col__container'>
                                <div className='col__container__title'>
                                    RANK
                                </div>
                                <div className='col__container__subtitle'>
                                    {player.data.rank}
                                </div>
                            </div>
                            <div className='col__container'>
                                <div className='col__container__title'>
                                    POINTS
                                </div>
                                <div className='col__container__subtitle'>
                                    {player.data.points}
                                </div>
                            </div>
                            <div className='col__container'>
                                <div className='col__container__title'>
                                    COUNTRY
                                </div>
                                <div className='col__container__subtitle'>
                                    {player.country.code}
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='col__container'>
                                <div className='col__container__title'>
                                    AGE
                                </div>
                                <div className='col__container__subtitle'>
                                    {player.data.age}
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='col__container'>
                                <div className='col__container__title'>
                                    WEIGHT
                                </div>
                                <div className='col__container__subtitle'>
                                    {player.data.weight.toString().slice(0, 2)} kg
                                </div>
                            </div>
                            <div className='col__container'>
                                <div className='col__container__title'>
                                    HEIGHT
                                </div>
                                <div className='col__container__subtitle'>
                                    {player.data.height} cm
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
});
