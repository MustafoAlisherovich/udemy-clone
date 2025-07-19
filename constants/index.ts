import {
	Bell,
	Contact,
	CreditCard,
	FileCode,
	GaugeCircle,
	Home,
	ListVideo,
	MessageSquareMore,
	MonitorPlay,
	Rss,
	Settings2,
	User,
} from 'lucide-react'
import {
	DiCisco,
	DiCreativecommonsBadge,
	DiDjango,
	DiDocker,
	DiGhost,
	DiGithubFull,
	DiLess,
	DiMailchimp,
	DiMeteorfull,
	DiNetmagazine,
	DiNginx,
	DiStylus,
	DiYahoo,
} from 'react-icons/di'

export const navLinks = [
	{ route: '', name: 'navLink1', icon: Home },
	{ route: 'courses', name: 'navLink2', icon: ListVideo },
	{ route: 'blogs', name: 'navLink3', icon: Rss },
	{ route: 'contacts', name: 'navLink4', icon: Contact },
]

export const lngs = [
	{ route: 'en', label: 'English' },
	{ route: 'uz', label: "O'zbekcha" },
	{ route: 'ru', label: 'Русский' },
	{ route: 'tr', label: 'Türkçe' },
]

export const companies = [
	DiCisco,
	DiCreativecommonsBadge,
	DiGhost,
	DiGithubFull,
	DiMeteorfull,
	DiLess,
	DiMailchimp,
	DiNetmagazine,
	DiNginx,
	DiStylus,
	DiYahoo,
	DiDjango,
	DiDocker,
]

export const filterCourses = [
	{ label: 'cateogry1', name: 'all' },
	{ label: 'cateogry2', name: 'newest' },
	{ label: 'cateogry3', name: 'lowest-price' },
	{ label: 'cateogry4', name: 'highest-price' },
]

export const filterLevels = [
	{ label: 'level1', name: 'all' },
	{ label: 'level2', name: 'beginner' },
	{ label: 'level3', name: 'intermediate' },
	{ label: 'level4', name: 'advanced' },
]

export const courses = [
	{
		title: 'JavaScript',
		previewImage:
			'https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Ffa42d36e-0e79-4d72-806e-2884d9550590-uiysmj.png&w=1200&q=75',
		author: {
			image: '/assets/authors/chris-impey.jpg',
			name: 'Chris Impley',
		},
		oldPrice: 179,
		currentPrice: 79,
		level: 'Beginner',
	},
	{
		title: 'ReactJS',
		previewImage:
			'https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F28bb5b4e-fcd5-4efe-9dfc-ecedc7be17ba-yxqcfn.png&w=1200&q=75',
		author: {
			image: '/assets/authors/emma-hazel.jpg',
			name: 'Chris Impley',
		},
		oldPrice: 159,
		currentPrice: 59,
		level: 'Intermidate',
	},
	{
		title: 'VueJS',
		previewImage:
			'https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2FmMbSyFqocdYGuy6elWw32ShZLOavzytcQulCmd8ogs7R0e4K&w=1200&q=75',
		author: {
			image: '/assets/authors/thomas-macaulay.jpg',
			name: 'Chris Impley',
		},
		oldPrice: 129,
		currentPrice: 29,
		level: 'Intermidate',
	},
	{
		title: 'Telegram BOT',
		previewImage:
			'https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F1662922d-b61d-401b-aa1a-693a6231d8a0-kilw9a.png&w=1920&q=75',
		author: {
			image: '/assets/authors/chris-impey.jpg',
			name: 'Chris Impley',
		},
		oldPrice: 209,
		currentPrice: 109,
		level: 'Intermidate',
	},
	{
		title: 'React Native',
		previewImage:
			'https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F27f17594-ae28-4fe1-86ce-964a5c89c78d-kilw7k.png&w=1920&q=75',
		author: {
			image: '/assets/authors/chris-impey.jpg',
			name: 'Chris Impley',
		},
		oldPrice: 129,
		currentPrice: 29,
		level: 'Intermidate',
	},
	{
		title: 'Foundation',
		previewImage:
			'https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fbcdfb541-3300-430f-b8b2-ff0fb57df056-kilw6p.png&w=1920&q=75',
		author: {
			image: '/assets/authors/chris-impey.jpg',
			name: 'Chris Impley',
		},
		oldPrice: 209,
		currentPrice: 109,
		level: 'Intermidate',
	},
]

export const instructors = [
	{
		name: 'Chris Impley',
		image: '/assets/authors/chris-impey.jpg',
		job: 'Web Developer',
	},
	{
		name: 'Thomas Winter',
		image: '/assets/authors/thomas-macaulay.jpg',
		job: 'Photographer',
	},
	{
		name: 'Emma Watson',
		image: '/assets/authors/emma-hazel.jpg',
		job: 'Digital Marketer',
	},
	{
		name: 'John Doe',
		image:
			'https://static.independent.co.uk/2023/05/01/11/be5fda0ecbee4f69e504b721f23a0608Y29udGVudHNlYXJjaGFwaSwxNjgzMDIyNTM1-2.71789316.jpg?quality=75&width=990&crop=3%3A2%2Csmart&auto=webp',
		job: 'Designer',
	},
]

export const categories = [
	{
		icon: '/assets/categories/digital-marketing.svg',
		label: 'Digital Marketing',
	},
	{ icon: '/assets/categories/web-development.svg', label: 'Web Development' },
	{ icon: '/assets/categories/graphic-design.svg', label: 'Graphic Design' },
	{ icon: '/assets/categories/photography.svg', label: 'Photography' },
	{ icon: '/assets/categories/social-sciences.svg', label: 'Social Sciences' },
	{ icon: '/assets/categories/art-humanities.svg', label: 'Art & Humanities' },
	{
		icon: '/assets/categories/personal-development.svg',
		label: 'Personal Development',
	},
	{ icon: '/assets/categories/it-software.svg', label: 'IT & Software' },
]

export const learningJourney = [
	{
		title: 'startTitle1',
		excerpt: 'startDescription1',
		image: '/assets/journey/rating.png',
	},
	{
		title: 'startTitle2',
		excerpt: 'startDescription2',
		image: '/assets/journey/science.png',
	},
	{
		title: 'startTitle3',
		excerpt: 'startDescription3',
		image: '/assets/journey/online-learning.png',
	},
	{
		title: 'startTitle4',
		excerpt: 'startDescription4',
		image: '/assets/journey/certificate.png',
	},
]

export const instructorNavLinks = [
	{
		label: 'Dashboard',
		route: '/instructor',
		icon: GaugeCircle,
	},
	{
		label: 'My Courses',
		route: '/instructor/my-courses',
		icon: MonitorPlay,
	},
	{
		label: 'Create Course',
		route: '/instructor/create-course',
		icon: FileCode,
	},
	{
		label: 'Reviews',
		route: '/instructor/reviews',
		icon: MessageSquareMore,
	},
	{
		label: 'Settings',
		route: '/instructor/settings',
		icon: Settings2,
	},
]

export const courseLevels = ['beginner', 'intermediate', 'advanced']
export const courseCategory = [
	'front-end',
	'back-end',
	'full-stack',
	'mobile',
	'desktop',
	'game',
]
export const courseLanguage = ['english', 'uzbek', 'russian', 'turkish']

export const editorConfig = {
	height: 150,
	menubar: false,
	plugins: [
		'advlist',
		'autolink',
		'lists',
		'link',
		'image',
		'charmap',
		'preview',
		'anchor',
		'searchreplace',
		'visualblocks',
		'codesample',
		'fullscreen',
		'insertdatetime',
		'media',
		'table',
	],
	toolbar: 'link |' + 'bullist numlist',
	content_style: 'body { font-family:Inter; font-size:16px }',
	skin: 'oxide-dark',
	content_css: 'dark',
}

export const profileNavLinks = [
	{ label: 'dashboard', route: '/profile', icon: GaugeCircle },
	{ label: 'myCourses', route: '/profile/my-courses', icon: MonitorPlay },
	{ label: 'wishlist', route: '/profile/wishlist', icon: ListVideo },
	{ label: 'creditCards', route: '/profile/credit-cards', icon: CreditCard },
	{ label: 'reviews', route: '/profile/reviews', icon: MessageSquareMore },
	{ label: 'Notifications', route: '/profile/notifications', icon: Bell },
	{ label: 'settings', route: '/profile/settings', icon: Settings2 },
]

export const adminNavLinks = [
	{ label: 'Dashboard', route: '/admin', icon: GaugeCircle },
	{ label: 'All courses', route: '/admin/all-courses', icon: MonitorPlay },
	{ label: 'Instructors', route: '/admin/instructors', icon: User },
	{ label: 'Reviews', route: '/admin/reviews', icon: MessageSquareMore },
	{ label: 'Notifications', route: '/admin/notifications', icon: Bell },
]
