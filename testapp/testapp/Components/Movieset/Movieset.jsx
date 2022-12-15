import styles from './Movieset.module.css'
import Set from './Set/Set'

const Movieset = ({collection}) => {

  return (
    <div className={styles.Movieset}>
        <div className={styles.search}>
            Search
            <input type="search" name="" id="" />
        </div>
        <div className={styles.movies}>
        <Set data={collection[0].data.Search} title={collection[0].category} />
        <Set data={collection[1].data.Search} title={collection[1].category} />
        </div>
    </div>
  )
}


export default Movieset
