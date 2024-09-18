import ProductCard from '../../Components/ProductCard/ProductCard'
import Search from '../../Components/Search/Search'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
      <Search />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-10 px-20'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default HomePage