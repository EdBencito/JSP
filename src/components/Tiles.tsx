import './Tiles.css';
import TileItem from './TileItem.tsx';

const tileItems = [
  // Group 1
  { src: 'src/components/images/meta.webp', path: '/' },
  { src: 'src/components/images/apple.webp', path: '/' },
  { src: 'src/components/images/microsoft.webp', path: '/' },
  { src: 'src/components/images/amazon.webp', path: '/' },
  { src: 'src/components/images/google.webp', path: '/' },
  { src: 'src/components/images/goldman-sachs.webp', path: '/' },
  { src: 'src/components/images/hsbc.webp', path: '/' },
  { src: 'src/components/images/jp-morgan.webp', path: '/' },
  { src: 'src/components/images/bank-of-america.webp', path: '/' },
  { src: 'src/components/images/citi.webp', path: '/' },
  { src: 'src/components/images/barclays.webp', path: '/' },
  { src: 'src/components/images/mufg.webp', path: '/' },
  { src: 'src/components/images/santander.webp', path: '/' },
  // Group 2
  { src: 'src/components/images/pwc.webp', path: '/' },
  { src: 'src/components/images/deloitte.webp', path: '/' },
  { src: 'src/components/images/ey.webp', path: '/' },
  { src: 'src/components/images/kpmg.webp', path: '/' },
  { src: 'src/components/images/tata-consultancy.webp', path: '/' },
  { src: 'src/components/images/capgemini.webp', path: '/' },
  { src: 'src/components/images/accenture.webp', path: '/' },
  { src: 'src/components/images/ibm.webp', path: '/' },
  { src: 'src/components/images/mckinsey-and-company.webp', path: '/' },
  { src: 'src/components/images/boston-consulting-group.webp', path: '/' },
  { src: 'src/components/images/booz-allen-hamilton.webp', path: '/' },
  { src: 'src/components/images/bain-and-company.webp', path: '/' },
  { src: 'src/components/images/pa.webp', path: '/' },
  // Group 3
  { src: 'src/components/images/bloomberg.webp', path: '/' },
  { src: 'src/components/images/uber.webp', path: '/' },
  { src: 'src/components/images/netflix.webp', path: '/' },
  { src: 'src/components/images/oracle.webp', path: '/' },
  { src: 'src/components/images/mastercard.webp', path: '/' },
  { src: 'src/components/images/natwest.webp', path: '/' },
  { src: 'src/components/images/bt.webp', path: '/' },
  { src: 'src/components/images/sky.webp', path: '/' },
  { src: 'src/components/images/elsevier.webp', path: '/' },
  { src: 'src/components/images/cisco.png', path: '/' },
  { src: 'src/components/images/capital-one.webp', path: '/' },
  { src: 'src/components/images/deutsche.webp', path: '/' },
  // Group 4
  { src: 'src/components/images/expedia.webp', path: '/' },
  { src: 'src/components/images/amex.webp', path: '/' },
  { src: 'src/components/images/bbc.webp', path: '/' },
  { src: 'src/components/images/tesco.webp', path: '/' },
  { src: 'src/components/images/thoughtworks.webp', path: '/' },
  { src: 'src/components/images/visa.webp', path: '/' },
  { src: 'src/components/images/revolut.webp', path: '/' },
  { src: 'src/components/images/sainsbury.webp', path: '/' },
  { src: 'src/components/images/mimecast.webp', path: '/' },
  { src: 'src/components/images/monzo.webp', path: '/' },
  { src: 'src/components/images/ford.webp', path: '/' },
  { src: 'src/components/images/asos.webp', path: '/' },
  { src: 'src/components/images/abc.webp', path: '/' },
  // Group 5
  { src: 'src/components/images/just-eat.webp', path: '/' },
  { src: 'src/components/images/itv.webp', path: '/' },
  { src: 'src/components/images/cgi.webp', path: '/' },
  { src: 'src/components/images/bp.webp', path: '/' },
  { src: 'src/components/images/wise.webp', path: '/' },
  { src: 'src/components/images/ubs.webp', path: '/' },
  { src: 'src/components/images/octopus.webp', path: '/' },
  { src: 'src/components/images/bae-systems.webp', path: '/' },
  { src: 'src/components/images/palantir.webp', path: '/' },
  { src: 'src/components/images/psn.webp', path: '/' },
  { src: 'src/components/images/salesforce.webp', path: '/' },
  { src: 'src/components/images/marks-and-spencer.webp', path: '/' },
  { src: 'src/components/images/credit-suisse.webp', path: '/' },
  { src: 'src/components/images/citadel.webp', path: '/' },
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
