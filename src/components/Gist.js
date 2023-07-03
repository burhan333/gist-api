import { useState, useEffect } from 'react'
import ImgFile from '../assets/icons/file.PNG'
import ImgFiles from '../assets/icons/files.PNG'
import ImgForks from '../assets/icons/forks.PNG'
import ImgComments from '../assets/icons/comments.PNG'
import ImgStars from '../assets/icons/star.PNG'

const Gist = ({ gist }) => {
    
    const [files, setFiles] = useState([])

    useEffect(() => {
        const array = []
        const keys = Object.keys(gist.files)
        keys.forEach(item => {
            array.push(gist.files[item])
        })
        setFiles(array)
    }, [])

    const formatDate = (dateString) => {
        const date = new Date(dateString);

        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        
        const formattedDate = `${month}/${day}/${year}`;

        return formattedDate
    }

    return(
        <div className="gist">
            <div className="gist_top">
                <div className="gist_user">
                    <div className="gist_avatar">
                        <img src={gist.owner.avatar_url} alt="..." />
                    </div>
                    <a className='gist_username' href={gist.owner.html_url} target='_blank'>{gist.owner.login}</a>
                </div>
                <div className="gist_icons">
                    <div>
                        <img src={ImgFiles} alt="..." />
                        <span>{files.length} Files</span>
                    </div>
                    <div>
                        <img src={ImgForks} alt="..." />
                        <a href={gist.forks_url} target='_blank'>Forks</a>
                    </div>
                    <div>
                        <img src={ImgComments} alt="..." />
                        <a href={gist.comments_url} target='_blank'>Comments</a>
                    </div>
                    <div>
                        <img src={ImgStars} alt="..." />
                        <span>Stars</span>
                    </div>
                </div>
            </div>
            <div>
                <span className='gist_date'>Created at: {formatDate(gist.created_at)}</span>
                <span className='gist_date'>Last updated: {formatDate(gist.updated_at)}</span>
            </div>
            <p className='gist_desc'>{gist.description ? gist.description : 'NO DESCRIPTION AVAILABLE'}</p>
            <div className='gist_files'>
                {files?.map(item => (
                    <div key={item.filename + item.size}>
                        <img src={ImgFile} alt="..." />
                        <span>{item.filename}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gist
