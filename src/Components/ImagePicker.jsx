import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'

function ImagePicker() {
	const [images, setImages] = useState([])

	const onDrop = useCallback((acceptedFiles) => {
		acceptedFiles.forEach((file) => {
			const reader = new FileReader()
			reader.onload = () => {
				setImages((prevState) => [...prevState, reader.result])
			}
			reader.readAsDataURL(file)
		})
		setImages([])
	}, [])

	const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
		onDrop,
		maxFiles: 1,
		accept: {
			'image/jpeg': [],
			'image/png': [],
			'image/JPG': [],
		},
	})

	function handleDelete() {
		setImages([])
	}

	return (
		<StyledImagePicker>
			<StyledImagePickerContainerOne>
				<StyledImagePickerTittle>My Ava</StyledImagePickerTittle>
				<StyledImagePickerContainerTwo {...getRootProps()}>
					<input {...getInputProps()} />
					{images.length === 0 ? (
						<StyledImagePickerTittle>
							{isDragActive
								? 'Отпустите'
								: 'Нажмите или Вставьте Фото'}
						</StyledImagePickerTittle>
					) : (
						<StyledImagePickerImage src={images} />
					)}
				</StyledImagePickerContainerTwo>
			</StyledImagePickerContainerOne>
			<StyledImagePickerContainerThree>
				<StyledImagePickerButton onClick={open} color={'#8454f6'}>
					{images.length === 0 ? 'Choose' : 'Replace'} Photo
				</StyledImagePickerButton>
				<StyledImagePickerButton
					color={images.length === 0 ? 'gray' : 'red'}
					onClick={handleDelete}
				>
					Delete
				</StyledImagePickerButton>
			</StyledImagePickerContainerThree>
		</StyledImagePicker>
	)
}

const StyledImagePicker = styled.div`
	width: 800px;
	height: 500px;
	border: 3px solid black;
	display: flex;
	align-items: center;
	justify-content: space-around;
`
const StyledImagePickerContainerOne = styled.div`
	width: 400px;
	height: 400px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`
const StyledImagePickerContainerTwo = styled.div`
	width: 300px;
	height: 300px;
	border: 4px solid black;
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	object-fit: cover;
`
const StyledImagePickerContainerThree = styled.div`
	width: 400px;
	height: 400px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`
const StyledImagePickerTittle = styled.span`
	font-size: 18px;
	font-weight: bold;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
`
const StyledImagePickerImage = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 100%;
	object-fit: cover;
`
const StyledImagePickerButton = styled.button`
	width: 200px;
	height: 50px;
	background: ${(props) => props.color};
	color: whitesmoke;
	font-size: 20px;
	font-family: cursive;
	cursor: pointer;
`
export default ImagePicker
