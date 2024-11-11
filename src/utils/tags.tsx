import type { HeroIcon } from '@/lib/heroicon'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import {
  type SimpleIcon,
  siAmazonwebservices,
  siFastify,
  siFirebase,
  siGithub,
  siGithubactions,
  siGo,
  siGooglecloud,
  siJavascript,
  siMdx,
  siMicrobit,
  siNextdotjs,
  siNodedotjs,
  siNpm,
  siPhp,
  siPython,
  siRaspberrypi,
  siReact,
  siSocketdotio,
  siTailwindcss,
  siTerraform,
  siTypescript,
} from 'simple-icons'

type Tags = {
  [key: string]: {
    name: string
    icon?: SimpleIcon
    heroIcon?: HeroIcon
    className?: string
  }
}

export const tags: Tags = {
  nextjs: {
    name: 'Next.js',
    icon: siNextdotjs,
  },
  react: {
    name: 'React',
    icon: siReact,
  },
  firebase: {
    name: 'Firebase',
    icon: siFirebase,
  },
  mdx: {
    name: 'MDX',
    icon: siMdx,
  },
  tailwindcss: {
    name: 'Tailwind CSS',
    icon: siTailwindcss,
  },
  typescript: {
    name: 'TypeScript',
    icon: siTypescript,
  },
  googlecloud: {
    name: 'Google Cloud',
    icon: siGooglecloud,
  },
  ejs: {
    name: 'EJS',
  },
  python: {
    name: 'Python',
    icon: siPython,
  },
  npm: {
    name: 'npm',
    icon: siNpm,
  },
  docusaurus: {
    name: 'Docusaurus',
  },
  javascript: {
    name: 'JavaScript',
    icon: siJavascript,
  },
  microbit: {
    name: 'micro:bit',
    icon: siMicrobit,
  },
  raspberrypi: {
    name: 'Raspberry Pi',
    icon: siRaspberrypi,
  },
  githubpages: {
    name: 'GitHub Pages',
    icon: siGithub,
  },
  materializecss: {
    name: 'Materialize CSS',
  },
  php: {
    name: 'PHP',
    icon: siPhp,
  },
  nodejs: {
    name: 'Node.js',
    icon: siNodedotjs,
  },
  hsp: {
    name: 'HSP',
  },
  deprecated: {
    name: 'Deprecated',
    heroIcon: ExclamationCircleIcon,
    className: 'text-yellow-500 dark:text-yellow-400',
  },
  fastify: {
    name: 'Fastify',
    icon: siFastify,
  },
  websocket: {
    name: 'WebSocket',
    icon: siSocketdotio,
  },
  golang: {
    name: 'Go',
    icon: siGo,
  },
  githubactions: {
    name: 'GitHub Actions',
    icon: siGithubactions,
  },
  aws: {
    name: 'AWS',
    icon: siAmazonwebservices,
  },
  terraform: {
    name: 'Terraform',
    icon: siTerraform,
  },
}
