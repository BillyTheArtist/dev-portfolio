import { HeptaBox } from './HeptaBox'
import { MailboxIcon } from './icons/MailboxIcon'
import { useTheme } from '@/context/themeContext'

export function ContactForm () {
  const { theme } = useTheme()
  const handleEmailButtonClick = () => {
    const emailAddress = 'billy..iv.art@gmail.com'
    const subject = 'Contact Request'
    const message = 'Hello, I would like to get in touch with you.'

    // Create the mailto link
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`

    // Open the user's default email client
    window.location.href = mailtoLink
  }

  //Profile URLs
  const linkedinProfileUrl =
    'https://www.linkedin.com/in/billy-townsend-262555252/'
  const githubProfileUrl = 'https://github.com/BillyTheArtist'

  return (
    <HeptaBox>
      <div
        className={`grid grid-cols-1 gap-1 place-items-center justify-center text-center lg:text-xl text-brightGrey`}
      >
        <MailboxIcon />
        <h1 className={`mb-1 text-copyColor text-[30px] font-bold`}>
          Contact Me!
        </h1>
        <a href={githubProfileUrl} target='_blank' rel='noopener noreferrer'>
          <button
            className={` text-copyColor transition-transform transform hover:scale-103`}
            style={{ transitionDuration: '0.5s' }}
          >
            See my activity on Github
          </button>
        </a>

        <a href={linkedinProfileUrl} target='_blank' rel='noopener noreferrer'>
          <button
            className={` text-copyColor transition-transform transform hover:scale-103`}
            style={{ transitionDuration: '0.5s' }}
          >
            Connect on LinkedIn
          </button>
        </a>
        <button
          onClick={handleEmailButtonClick}
          className={`text-copyColor transition-transform transform hover:scale-103`}
          style={{ transitionDuration: '0.5s' }}
        >
          Contact via Email
        </button>
      </div>
    </HeptaBox>
  )
}
