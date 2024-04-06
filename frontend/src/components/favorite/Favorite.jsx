import { useDispatch, useSelector } from 'react-redux'
import Cards from "../cards/Cards"
import { filterCards, orderCards } from "../../redux/actions"
import "./favorite.css"

function Favorite() {
    const dispatch = useDispatch()

    // const [aux, setAux] = useState(flase); 
    const { myFavorites } = useSelector((state) => state)

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
    }
    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }
    return (
        <div >
            <select name='order' onChange={handleOrder} className='options'>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select name='filter' onChange={handleFilter} className='options'>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            {
                <Cards characters={myFavorites} />
            }
        </div>

    )
}

export default Favorite