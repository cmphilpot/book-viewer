import { Link } from 'react-router-dom';
import { ChapterProps } from '../types'


const ChapterLinks = ({chapters}: ChapterProps ): JSX.Element => {

  const convertedChapterNames = [...chapters].map((name: string) => {
    return name.toLowerCase().replaceAll('\s+', '-');
    }
  );

return (
  <>
    <ul>
      {convertedChapterNames.map((chapter, index) => {
        return (
          <li key={chapter}>
              <Link
                to={`/chapters/${chapter}`}
                key={chapter}
                >
                  Chapter {(index + 1)}:
                   {chapters[index]}
              </Link>
          </li>
        )
      })}
    </ul>
  </>
  )
}

export default ChapterLinks
