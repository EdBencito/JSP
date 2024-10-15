import './Tiles.css';
import TileItem from './TileItem.tsx';

const tileItems = [
  // Group 1
  { src: '/JSP/icons/meta.webp', path: '/' },
  { src: '/JSP/icons/apple.webp', path: '/' },
  { src: '/JSP/icons/microsoft.webp', path: '/' },
  { src: '/JSP/icons/amazon.webp', path: '/' },
  { src: '/JSP/icons/google.webp', path: '/' },
  { src: '/JSP/icons/goldman-sachs.webp', path: '/' },
  { src: '/JSP/icons/hsbc.webp', path: '/' },
  { src: '/JSP/icons/jp-morgan.webp', path: '/' },
  { src: '/JSP/icons/bank-of-america.webp', path: '/' },
  { src: '/JSP/icons/citi.webp', path: '/' },
  { src: '/JSP/icons/barclays.webp', path: '/' },
  { src: '/JSP/icons/mufg.webp', path: '/' },
  { src: '/JSP/icons/santander.webp', path: '/' },
  // Group 2
  { src: '/JSP/icons/pwc.webp', path: '/' },
  { src: '/JSP/icons/deloitte.webp', path: '/' },
  { src: '/JSP/icons/ey.webp', path: '/' },
  { src: '/JSP/icons/kpmg.webp', path: '/' },
  { src: '/JSP/icons/tata-consultancy.webp', path: '/' },
  { src: '/JSP/icons/capgemini.webp', path: '/' },
  { src: '/JSP/icons/accenture.webp', path: '/' },
  { src: '/JSP/icons/ibm.webp', path: '/' },
  { src: '/JSP/icons/mckinsey-and-company.webp', path: '/' },
  { src: '/JSP/icons/boston-consulting-group.webp', path: '/' },
  { src: '/JSP/icons/booz-allen-hamilton.webp', path: '/' },
  { src: '/JSP/icons/bain-and-company.webp', path: '/' },
  { src: '/JSP/icons/pa.webp', path: '/' },
  // Group 3
  { src: '/JSP/icons/bloomberg.webp', path: '/' },
  { src: '/JSP/icons/uber.webp', path: '/' },
  { src: '/JSP/icons/netflix.webp', path: '/' },
  { src: '/JSP/icons/oracle.webp', path: '/' },
  { src: '/JSP/icons/mastercard.webp', path: '/' },
  { src: '/JSP/icons/natwest.webp', path: '/' },
  { src: '/JSP/icons/bt.webp', path: '/' },
  { src: '/JSP/icons/sky.webp', path: '/' },
  { src: '/JSP/icons/elsevier.webp', path: '/' },
  { src: '/JSP/icons/cisco.png', path: '/' },
  { src: '/JSP/icons/capital-one.webp', path: '/' },
  { src: '/JSP/icons/deutsche.webp', path: '/' },
  // Group 4
  { src: '/JSP/icons/expedia.webp', path: '/' },
  { src: '/JSP/icons/amex.webp', path: '/' },
  { src: '/JSP/icons/bbc.webp', path: '/' },
  { src: '/JSP/icons/tesco.webp', path: '/' },
  { src: '/JSP/icons/thoughtworks.webp', path: '/' },
  { src: '/JSP/icons/visa.webp', path: '/' },
  { src: '/JSP/icons/revolut.webp', path: '/' },
  { src: '/JSP/icons/sainsbury.webp', path: '/' },
  { src: '/JSP/icons/mimecast.webp', path: '/' },
  { src: '/JSP/icons/monzo.webp', path: '/' },
  { src: '/JSP/icons/ford.webp', path: '/' },
  { src: '/JSP/icons/asos.webp', path: '/' },
  { src: '/JSP/icons/abc.webp', path: '/' },
  // Group 5
  { src: '/JSP/icons/just-eat.webp', path: '/' },
  { src: '/JSP/icons/itv.webp', path: '/' },
  { src: '/JSP/icons/cgi.webp', path: '/' },
  { src: '/JSP/icons/bp.webp', path: '/' },
  { src: '/JSP/icons/wise.webp', path: '/' },
  { src: '/JSP/icons/ubs.webp', path: '/' },
  { src: '/JSP/icons/octopus.webp', path: '/' },
  { src: '/JSP/icons/bae-systems.webp', path: '/' },
  { src: '/JSP/icons/palantir.webp', path: '/' },
  { src: '/JSP/icons/psn.webp', path: '/' },
  { src: '/JSP/icons/salesforce.webp', path: '/' },
  { src: '/JSP/icons/marks-and-spencer.webp', path: '/' },
  { src: '/JSP/icons/credit-suisse.webp', path: '/' },
  { src: '/JSP/icons/citadel.webp', path: '/' },
];


function Tiles() {
  const groupTiles = (items: typeof tileItems, groupSize: number) => {
    return items.reduce((acc: typeof tileItems[], currentItem, index) => {
      const groupIndex = Math.floor(index / groupSize);
      if (!acc[groupIndex]) acc[groupIndex] = [];
      acc[groupIndex].push(currentItem);
      return acc;
    }, []);
  };

  const groupedTiles = groupTiles(tileItems, 13); // Group items into sets of 12

  return (
    <div className='tiles'>
      <h1>EMPLOYERS</h1>
      <div className='tiles__container'>
        <div className='tiles__wrapper'>
          {groupedTiles.map((group, index) => (
            <ul key={index} className='tiles__items'>
              {group.map((tile, i) => (
                <TileItem key={i} src={tile.src} path={tile.path} />
              ))}
            </ul>
          ))}
        </div>
        <span>AND MANY MORE</span>
      </div>
    </div>
  );
}

export default Tiles;
