import Image from './Image'
import Link from './Link'
import GithubLogo from '@/data/githubLogo.png'

const Card = ({ title, description, imgSrc, href, github }) => (
    <div className="md max-w-[544px] p-4 md:w-1/2">
        <div
            className={`${
                imgSrc && 'h-full'
            }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
        >
            {imgSrc &&
                (href ? (
                    <Link href={href} aria-label={`Link to ${title}`}>
                        <Image
                            alt={title}
                            src={imgSrc}
                            className="object-cover object-center md:h-48 lg:h-72"
                            width={544}
                            height={400}
                        />
                    </Link>
                ) : (
                    <Image
                        alt={title}
                        src={imgSrc}
                        className="object-cover object-center md:h-48 lg:h-72"
                        width={544}
                        height={400}
                    />
                ))}
            <div className="p-6">
                <div className='flex items-center space-x-2 mb-3'>
                    <h2 className="mb-0 text-2xl font-bold leading-8 tracking-tight">
                        {href ? (
                            <Link href={href} aria-label={`Link to ${title}`}>
                                {title}
                            </Link>
                        ) : (
                            title
                        )}
                    </h2>
                    {github && (
                        <Link
                            href={github}
                            aria-label={`Link to ${title} GitHub`}
                        >
                            <Image
                                src={GithubLogo}
                                alt="Github"
                                width={25}
                                height={25}
                                className="object-cover object-center"
                            />
                        </Link>
                    )}
                </div>
                <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                    {description}
                </p>
                {href && (
                    <Link
                        href={href}
                        className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Link to ${title}`}
                    >
                        Learn more &rarr;
                    </Link>
                )}
            </div>
        </div>
    </div>
)

export default Card
