import ChapterLinks from '../components/ChapterLinks';
import { ChapterProps } from '../types'

const Home = ({chapters}: ChapterProps ): JSX.Element => {
  return (
    <>
      <h3>Table of Contents</h3>
      <div className="toc-chapters">
          <ChapterLinks chapters={chapters}/>
      </div>
    </>
  )
}

export default Home
