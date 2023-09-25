import api from '@/src/config/api/api'
import * as S from './styles'
import { NextPage } from 'next'
import { useState } from 'react'
import useStore from '@/src/zustand/store'

type UploadFilesProps = {}

const UploadFiles: NextPage<UploadFilesProps> = () => {
    const [uploading, setUploading] = useState(false)
    const [selectedImage, setSelectedImage] = useState('')
    const [selectedFile, setSelectedFile] = useState<File>()
    const { userId } = useStore()

    const convertImageToBase64 = (file: File) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    const onSubmit = async () => {
        const imageConvertedToBase64 = await convertImageToBase64(
            selectedFile as File
        )
        api.patch(
            `/users/update/avatar/${userId}`,
            { image: selectedFile },
            { headers: { 'Content-Type': 'multipart/form-data' } }
        ).then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <S.Container>
            <label>
                <input
                    type="file"
                    hidden
                    onChange={({ target }) => {
                        if (target.files) {
                            const file = target.files[0]
                            setSelectedImage(URL.createObjectURL(file))
                            setSelectedFile(file)
                        }
                    }}
                />
                <S.Content>
                    {selectedImage ? (
                        <img src={selectedImage} alt="" />
                    ) : (
                        <span>Select Image</span>
                    )}
                </S.Content>
            </label>

            <S.Button
                onClick={onSubmit}
                disabled={uploading}
                style={{ opacity: uploading ? '.5' : '1' }}
            >
                {uploading ? 'Uploading..' : 'Upload'}
            </S.Button>
        </S.Container>
    )
}

export default UploadFiles
