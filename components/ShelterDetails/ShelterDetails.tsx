import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const features = [
  { name: 'Aadress', description: 'Designed by Good Goods, Inc.' },
  {
    name: 'Kontakt',
    description:
      'Solid walnut base with rare earth magnets and powder coated steel card cover',
  },
  { name: 'Lahtioleku ajad', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Loomade arv', description: 'Hand sanded and finished with natural oil' },
]

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
]

const ShelterView = () => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 items-center gap-y-[3rem] gap-x-[3rem] py-24 sm:py-[6rem] lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Üldinfo
          </h2>
          <p className="mt-4 text-gray-500">
            The walnut wood card tray is precision milled to perfectly fit a
            stack of Focus cards. The powder coated steel divider separates
            active cards from new ones, or can be used to archive important task
            lists.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-blue-700">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <ImageGallery
          additionalClass="mb-auto"
          items={images}
          showPlayButton={false}
        />
      </div>
    </div>
  )
}

export default ShelterView
