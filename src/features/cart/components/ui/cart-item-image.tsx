interface ICartItemImageProps {
  alt: string
  image_url: string
}

const CartItemImage = ({ image_url, alt }: ICartItemImageProps) => {
  return (
    <div className="size-full">
      <img src={image_url} alt={alt} className="rounded-md" loading="lazy" />
    </div>
  )
}

export default CartItemImage
