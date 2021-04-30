import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filesData } from '../../actions/filesAction';
import File from './File.jsx'
import '../../style/style.css';
import '../../style/Files/style.css'
import Popup from './Popup';
import { setCurrentDir, setFileView, setPopupDisplay } from '../../reducers/files';
import { createFile } from '../../actions/createFileAction'; 
import Uploader from './Uploader.jsx';
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import { searchFile } from '../../actions/searchFile';
import {showLoader} from '../../reducers/loader';
import tile from '../../images/tile_w.png' 
import tile9 from '../../images/tile_3x3_w.png' 
import list from '../../images/list_w.png'

function Files (props) {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const dirStack = useSelector(state => state.files.dirStack)
    const loader = useSelector(state => state.loader)
    const fileView = useSelector(state => state.files.view)
    const [dragEnter, setDragEnter] = useState(false)
    const [searchName, setSearchName] = useState('')
    const [searchTimeout, setSearchTimeout] = useState(false)
    const [sort, setSort] = useState('type')
    useEffect(() => {
        dispatch(filesData(currentDir, sort))
    }, [currentDir, sort])
    const files = useSelector(state => state.files.files)

    function showPopupHandler() {
        dispatch(setPopupDisplay('flex'))
    }
    function backClickHandler() {
        const backDirId = dirStack.pop()
        dispatch(setCurrentDir(backDirId))
    }
    function fileUploadHandler(e) {
        const files = [...e.target.files]
        files.forEach(file => dispatch(createFile(file, currentDir)))
    }
    function dragEnterHandler(e) {
        e.preventDefault()
        e.stopPropagation()
        setDragEnter(true)
    }
    function dragLeaveHandler(e) {
        e.preventDefault()
        e.stopPropagation()
        setDragEnter(false)
    }
    function dropHandler(e) {
        e.preventDefault()
        e.stopPropagation()
        let files = [...e.dataTransfer.files]
        files.forEach(file => dispatch(createFile(file, currentDir)))
        setDragEnter(false)
    }
    function searchChangeHandler(e) {
        setSearchName(e.target.value)
        if(searchTimeout != false) {
            clearTimeout(searchTimeout)
        }
        if(e.target.value != '') {
            setSearchTimeout(setTimeout((value) => {
                dispatch(searchFile(value));
            }, 500, e.target.value))
        } else {
            dispatch(filesData(currentDir))
        }
    }
    if(loader.loader) {
        return (
        <div className='center'>
            <div className='list'>
                <div className='list__name'><h3>Файлы</h3></div>
                <div className='loader'>
                    <div class="lds-hourglass"></div>
                </div>        
            </div>
        </div>
        )
    }

    return ( !dragEnter ?
        <div className='center' onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
            <div className='list'>
                <div className='list__name'><h3>Файлы</h3></div>
                <div className='list__main'>
                    <div className="list__container">
                        <button onClick={() => backClickHandler()}>Назад</button>
                        <button onClick={() => showPopupHandler()}>Создать папку</button>
                        <div className="files__upload">
                            <label htmlFor="files__upload-input" className="files__upload-label">Загрузить файл</label>
                            <input multiple={true} onChange={(e) => fileUploadHandler(e)} type='file' id="files__upload-input" className="files__upload-input" />
                        </div>
                        <select value={sort} onChange={(e) => setSort(e.target.value)} className='files__sort'>
                            <option value="name">По имени</option>
                            <option value="type">По типу</option>
                            <option value="date">По дате</option>
                        </select>
                        <input 
                            value={searchName}
                            onChange={e => searchChangeHandler(e)}
                            className='files__search' 
                            type='text' 
                            placeholder='Название файла...' 
                        ></input>
                        <img className='files__list' onClick={() => dispatch(setFileView('list'))} src={list} alt=""/>
                        <img className='files__tile4' onClick={() => dispatch(setFileView('tile'))} src={tile} alt=""/>
                    </div>
                    {fileView === 'list' 
                    ? (<div className='files'>
                        <div className="files__propertys">
                            <div className='files__property'>Тип</div>
                            <div className='files__property'>Название</div>
                            <div className='files__property'>Дата</div>
                            <div className='files__property'>Размер</div>
                        </div>
                        <TransitionGroup>
                            {files.map(file => 
                            <CSSTransition
                                key={file._id}
                                timeout={500}
                                classNames={'file'}
                                exit={false}
                            >
                                <File file={file}/>
                            </CSSTransition>
                            )}
                        </TransitionGroup>
                    </div>)
                    :
                    (<div className='files-tile'>
                            {files.map(file => 
                                <File key={file._id} file={file}/>
                            )}
                    </div>)
                    }
                </div>
            </div>
            <Popup />
            <Uploader />
        </div>
        :
        <div className='drop-area' onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
            Перетащите файлы сюда
        </div>
    )
}

export default Files;