import { MailIcon, PhoneIcon } from '@heroicons/react/solid'

const people = [
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'CEO',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'CTO',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Program Director',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://randomuser.me/api/portraits/men/40.jpg',
  },
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Developer Lead',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Customer Director',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://randomuser.me/api/portraits/women/9.jpg',
  },
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Product Specialist',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://randomuser.me/api/portraits/women/26.jpg',
  },

  // More people...
]

const Team = () => {
  return (
    <div className="bg-indigo-700">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center font-extrabold text-white">
          Meet Our Team
        </h2>
        <ul role="list" className=" mt-8 lg:mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {people.map((person) => (
            <li
              key={person.email}
              className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
            >
              <div className="flex-1 flex flex-col p-8">
                <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-gray-900 text-sm font-medium">{person.name}</h3>
                <dl className="mt-1 flex-grow flex flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-gray-500 text-sm">{person.title}</dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="mt-3">
                    <span className="px-2 py-1  text-green-800 text-sm font-medium bg-green-100 rounded-full">
                      {person.role}
                    </span>
                  </dd>
                </dl>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="w-0 flex-1 flex">
                    <a
                      href={`mailto:${person.email}`}
                      className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                    >
                      <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-3">Email</span>
                    </a>
                  </div>
                  <div className="-ml-px w-0 flex-1 flex">
                    <a
                      href={`tel:${person.telephone}`}
                      className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                    >
                      <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-3">Call</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Team;