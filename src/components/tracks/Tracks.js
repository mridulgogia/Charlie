import React,{ Component } from 'react';
import { Context, Consumer } from '../../context';
import Spinner from '../layouts/Spinner';
import Track from './Track'
class Tracks extends Component{
    render() {
        return (
            <Consumer>
                { value => {
                    console.log(value);
                    const { trackList, heading } = value;

                    if(trackList === undefined || trackList.length === 0){ 
                        return <Spinner />
                     }else{ 
                        return (
                            <>
                                <h3 className="text-center mb-4">{heading}</h3>
                                <div className = "row">
                                    {trackList.map( item => (
                                        <Track key={item.track.track_id} track = {item.track} />
                                    ))}
                                </div>
                            </>
                        )
                     }
                }}
            </Consumer>
        );
    }
}

export default Tracks;