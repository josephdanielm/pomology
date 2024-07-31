
export default async function getImage(imageName: string) {
    try {
        const image = await import(`../assets/fruits/${imageName.toLowerCase()}.png`)
        return image.default
    } catch (error) {
        console.error('Error loading image:', error)
        return null
    }
}