import { Link } from 'react-router-dom';

interface TileItemProps {
    src: string;
    path: string;
}

function TileItem({ src, path }: TileItemProps) {
    return (
        <>
            <li className='tiles__item'>
                <Link className='tiles__item__link' to={path}>
                    <figure className='tiles__item__pic-wrap'>
                        <img
                            className='tiles__item__img'
                            alt='Travel Image'
                            src={src}
                        />
                    </figure>
                    <div className='tiles__item__info'>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default TileItem;