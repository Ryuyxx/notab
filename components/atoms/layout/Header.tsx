import { memo, VFC, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import icon from "../../img/foxicon.png";
import { NavContent } from "../nav/NavContent";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export const Header: VFC = memo(() => {
	return (
		<header>
			<h2 className="sr-only">Header</h2>
			<Disclosure as="nav" className="bg-white shadow">
				{({ open }) => (
					<>
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="flex justify-between h-16">
								<div className="flex">
									<div className="flex-shrink-0 flex items-center">
										<Link href="/">
											<svg
												id="main_icon"
												enableBackground="new 0 0 512 512"
												height="512"
												viewBox="0 0 512 512"
												width="512"
												className=" block lg:h-12 h-10 w-auto animate-spin-slow"
											>
												<g>
													<g>
														<path
															d="m417.364 256c0 93.888-67.475 169-161.364 169-4.359 0-8.679.836-12.955.514-3.204-.242-6.383-.572-9.535-.988-5.105-.675-10.138-10.212-15.09-11.33-6.471-1.46-12.802 5.347-18.97 3.172-45.144-15.919-81.549-50.36-100.091-94.196-8.603-20.339-4.723-42.7-4.723-66.172 0-37.821 3.714-72.757 24.602-100.995 28.558-38.608 73.076-64.696 123.807-68.518 4.276-.323 8.596.513 12.955.513 93.888 0 161.364 75.112 161.364 169z"
															fill="#95c7f8"
														/>
														<path
															d="m256 86c-4.359 0-8.678.166-12.955.488 87.837 6.619 157.046 79.982 157.046 169.512s-69.209 162.894-157.045 169.512c4.276.322 8.595.488 12.954.488 93.888 0 170-76.112 170-170s-76.112-170-170-170z"
															fill="#75b5f8"
														/>
														<g fill="#ade4a4">
															<path d="m86 256c0 23.375 4.719 45.646 13.255 65.916 5.692 13.517 25.855 9.419 25.855-5.248v-18.403c0-17.636 9.396-33.937 24.657-42.777l59.522-34.478c10.284-5.957 16.615-16.941 16.615-28.825 0-11.655-6.091-22.462-16.061-28.498l-33.177-20.084c-19.208-11.627-44.066-6.643-57.42 11.407-20.892 28.236-33.246 63.169-33.246 100.99z" />
															<path d="m268.243 296.883-81.716-19.672c-8.148-1.961-15.987 4.214-15.987 12.595v50.651c0 4.581 1.82 8.974 5.059 12.214l20.061 20.061c2.43 2.43 3.794 5.725 3.794 9.16v34.464c10.888 3.839 22.281 6.605 34.057 8.161v-33.484c0-3.436 1.365-6.731 3.794-9.16l35.801-35.801c3.239-3.239 5.059-7.633 5.059-12.214v-24.38c.001-5.987-4.101-11.194-9.922-12.595z" />
															<path d="m285.471 172.596h-20.085c-8.495 0-15.381-6.887-15.381-15.381 0-8.495 6.887-15.381 15.381-15.381h20.085c8.495 0 15.381 6.886 15.381 15.381.001 8.495-6.886 15.381-15.381 15.381z" />
															<path d="m417.364 256c0-20.332 5.061-39.828-1.485-57.901h-101.4c-17.361 0-31.434 14.074-31.434 31.434 0 17.361 14.074 31.434 31.434 31.434 15.595 0 28.237 12.642 28.237 28.237v48.636c0 27.723 35.655 39.348 51.759 16.783 19.848-27.809 22.889-61.851 22.889-98.623z" />
														</g>
														<path
															d="m394.475 354.625c19.848-27.811 31.525-61.853 31.525-98.625 0-20.332-3.575-39.828-10.121-57.901h-25.915c6.547 18.073 10.127 37.567 10.127 57.901 0 41.255-14.704 79.07-39.145 108.511 11.241 4.377 25.077 1.957 33.529-9.886z"
															fill="#8bd5a7"
														/>
														<path
															d="m394.743 95.608c0 9.477 6.296 17.482 14.933 20.063 1.902.568 3.917-.127 6.003-.127 11.563 0 19.936-8.374 19.936-19.936s-8.374-19.936-19.936-19.936c-2.086 0-4.101-.695-6.003-.127-8.637 2.581-14.933 10.587-14.933 20.063z"
															fill="#ade4a4"
														/>
														<path
															d="m415.679 74.672c-2.087 0-4.098.315-6 .883 8.637 2.581 14.936 10.577 14.936 20.053s-6.299 17.472-14.936 20.053c1.902.568 3.913.883 6 .883 11.563 0 20.936-9.374 20.936-20.936s-9.373-20.936-20.936-20.936z"
															fill="#8bd5a7"
														/>
														<path
															d="m75.385 95.608c0 9.477 6.296 17.482 14.933 20.063 1.902.568 3.917-.127 6.003-.127 11.563 0 19.936-8.374 19.936-19.936s-8.373-19.936-19.936-19.936c-2.086 0-4.101-.695-6.003-.127-8.637 2.581-14.933 10.587-14.933 20.063z"
															fill="#ade4a4"
														/>
														<path
															d="m96.321 74.672c-2.087 0-4.098.315-6 .883 8.637 2.581 14.936 10.577 14.936 20.053s-6.299 17.472-14.936 20.053c1.902.568 3.913.883 6 .883 11.563 0 20.936-9.374 20.936-20.936s-9.373-20.936-20.936-20.936z"
															fill="#8bd5a7"
														/>
														<path
															d="m394.743 416.392c0 9.477 6.296 17.482 14.933 20.063 1.902.568 3.917-.127 6.003-.127 11.563 0 19.936-8.374 19.936-19.936s-8.374-19.936-19.936-19.936c-2.086 0-4.101-.695-6.003-.127-8.637 2.581-14.933 10.586-14.933 20.063z"
															fill="#ade4a4"
														/>
														<path
															d="m415.679 395.456c-2.087 0-4.098.315-6 .883 8.637 2.581 14.936 10.577 14.936 20.053s-6.299 17.472-14.936 20.053c1.902.568 3.913.883 6 .883 11.563 0 20.936-9.374 20.936-20.936s-9.373-20.936-20.936-20.936z"
															fill="#8bd5a7"
														/>
														<path
															d="m75.385 416.392c0 9.477 6.296 17.482 14.933 20.063 1.902.568 3.917-.127 6.003-.127 11.563 0 19.936-8.374 19.936-19.936s-8.373-19.936-19.936-19.936c-2.086 0-4.101-.695-6.003-.127-8.637 2.581-14.933 10.586-14.933 20.063z"
															fill="#ade4a4"
														/>
														<path
															d="m96.321 395.456c-2.087 0-4.098.315-6 .883 8.637 2.581 14.936 10.577 14.936 20.053s-6.299 17.472-14.936 20.053c1.902.568 3.913.883 6 .883 11.563 0 20.936-9.374 20.936-20.936s-9.373-20.936-20.936-20.936z"
															fill="#8bd5a7"
														/>
													</g>
													<g>
														<path d="m285.472 180.096c12.616 0 22.881-10.265 22.881-22.881s-10.265-22.881-22.881-22.881h-20.085c-12.617 0-22.882 10.265-22.882 22.881s10.265 22.881 22.882 22.881zm-27.967-22.881c0-4.346 3.536-7.881 7.882-7.881h20.085c4.346 0 7.881 3.536 7.881 7.881 0 4.346-3.535 7.881-7.881 7.881h-20.085c-4.346 0-7.882-3.535-7.882-7.881z" />
														<path d="m187.018 419.583c22.185 9.348 45.54 14.025 68.909 14.025 22.656 0 45.325-4.397 66.941-13.197 43.912-17.876 78.234-51.783 96.646-95.475 18.41-43.692 18.704-91.937.827-135.85-35.346-86.829-132.515-131.3-221.22-101.24-3.923 1.329-6.025 5.587-4.696 9.51 1.33 3.922 5.587 6.026 9.511 4.696 79.772-27.031 167.032 11.794 200.755 88.547h-37.21c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h42.948c12.199 37.199 10.612 77.083-4.738 113.512-4.675 11.094-10.474 21.496-17.267 31.09-.017.023-.036.043-.052.066-6.518 9.133-16.366 9.975-23.404 7.72-7.131-2.283-14.751-8.775-14.751-20.147v-48.636c0-19.706-16.031-35.737-35.737-35.737-13.197 0-23.934-10.737-23.934-23.934s10.736-23.934 23.934-23.934h20.044c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-20.044c-21.468 0-38.934 17.466-38.934 38.934s17.466 38.934 38.934 38.934c11.435 0 20.737 9.303 20.737 20.737v48.636c0 16.019 9.882 29.534 25.176 34.432 2.511.804 5.037 1.326 7.547 1.59-14.515 13.787-31.628 24.88-50.727 32.655-24.538 9.99-50.555 13.769-76.2 11.374v-26.86c0-1.457.567-2.827 1.598-3.857l35.801-35.801c4.679-4.679 7.256-10.9 7.256-17.517v-24.379c0-9.489-6.442-17.666-15.667-19.886l-81.717-19.672c-6.131-1.478-12.491-.084-17.446 3.819-4.954 3.904-7.796 9.76-7.796 16.067v50.651c0 6.617 2.577 12.838 7.256 17.517l20.061 20.061c1.031 1.031 1.599 2.4 1.599 3.857v23.482c-32.674-13.991-59.298-37.74-76.732-68.059.188-.033.375-.061.563-.099 10.062-2.032 16.823-10.29 16.823-20.548v-18.403c0-14.91 8.015-28.814 20.916-36.288l59.521-34.478c12.557-7.273 20.356-20.805 20.356-35.316 0-14.188-7.539-27.566-19.677-34.914l-33.178-20.084c-8.456-5.118-17.795-7.519-27-7.407 6.783-5.501 14.085-10.51 21.884-14.944 3.601-2.047 4.86-6.626 2.812-10.227-2.047-3.601-6.621-4.86-10.227-2.813-37.126 21.107-65.395 55.034-79.598 95.531-14.33 40.857-13.222 85.467 3.12 125.611 17.877 43.915 51.784 78.238 95.477 96.648zm-6.115-72.215c-1.847-1.846-2.863-4.3-2.863-6.911v-50.651c0-2.303 1.303-3.673 2.079-4.285.777-.612 2.421-1.556 4.652-1.019l81.717 19.673c2.46.592 4.178 2.772 4.178 5.303v24.379c0 2.61-1.017 5.064-2.863 6.911l-35.8 35.801c-3.863 3.863-5.991 9-5.991 14.464v24.743c-6.409-1.214-12.771-2.819-19.057-4.819v-29.065c0-5.463-2.128-10.6-5.991-14.464zm-55.819-187.666c.063-.078.13-.15.19-.231 11.131-15.044 31.554-19.109 47.507-9.452l33.178 20.084c7.676 4.647 12.444 13.108 12.444 22.082 0 9.178-4.934 17.736-12.874 22.336l-59.521 34.478c-17.517 10.146-28.398 29.024-28.398 49.267v18.403c0 4.525-3.669 5.618-4.793 5.845-1.119.226-4.903.64-6.649-3.507-.015-.035-.034-.067-.049-.102-.227-.541-.462-1.077-.683-1.622-21.837-53.643-12.838-113.234 19.648-157.581z" />
														<path d="m512 256c0-55.958-24.89-108.723-70.208-149.146 1.492-3.451 2.323-7.253 2.323-11.246 0-15.68-12.757-28.436-28.436-28.436-3.972 0-7.755.821-11.191 2.299-40.338-44.846-92.862-69.471-148.488-69.471-55.641 0-108.152 24.621-148.489 69.47-3.436-1.477-7.218-2.298-11.189-2.298-15.68 0-28.436 12.756-28.436 28.436 0 3.994.831 7.797 2.324 11.249-45.316 40.422-70.21 93.195-70.21 149.143 0 55.965 24.888 108.725 70.207 149.147-1.492 3.451-2.323 7.252-2.323 11.245 0 15.68 12.757 28.436 28.436 28.436 3.972 0 7.755-.821 11.192-2.299 40.338 44.844 92.866 69.471 148.488 69.471 55.627 0 108.151-24.624 148.488-69.47 3.437 1.477 7.219 2.298 11.19 2.298 15.68 0 28.436-12.756 28.436-28.436 0-3.992-.831-7.793-2.323-11.244 45.327-40.421 70.209-93.156 70.209-149.148zm-15 0c0 45.821-18.203 89.38-51.707 124.843 18.017-38.003 27.457-80.693 27.457-124.843 0-44.139-9.438-86.83-27.45-124.833 33.494 35.467 51.7 79.043 51.7 124.833zm-67.885-160.392c0 7.409-6.027 13.437-13.436 13.437s-13.437-6.028-13.437-13.437 6.027-13.436 13.437-13.436c7.409 0 13.436 6.027 13.436 13.436zm-48.281-28.907c-38.005-18.012-80.71-27.451-124.834-27.451-44.114 0-86.832 9.446-124.844 27.461 35.471-33.5 79.061-51.711 124.844-51.711 45.767 0 89.363 18.209 124.834 51.701zm-284.513 15.471c7.409 0 13.437 6.027 13.437 13.436s-6.027 13.437-13.437 13.437c-7.409 0-13.436-6.028-13.436-13.437s6.027-13.436 13.436-13.436zm-81.321 173.828c0-45.789 18.212-89.377 51.715-124.848-17.386 36.694-26.815 77.846-27.433 120.367-.061 4.142 3.248 7.548 7.39 7.608.037 0 .074.001.111.001 4.092 0 7.438-3.287 7.497-7.391.672-46.213 12.28-90.669 33.609-128.968 2.665.829 5.497 1.276 8.432 1.276 15.68 0 28.437-12.756 28.437-28.437 0-2.835-.423-5.573-1.199-8.159 39.351-21.731 85.017-33.199 132.441-33.199 47.439 0 93.09 11.468 132.44 33.202-.776 2.585-1.198 5.322-1.198 8.156 0 15.68 12.757 28.437 28.437 28.437 2.934 0 5.766-.447 8.431-1.276 22.021 39.53 33.64 85.457 33.64 133.232 0 47.783-11.619 93.703-33.64 133.232-2.665-.829-5.497-1.276-8.431-1.276-15.68 0-28.437 12.756-28.437 28.436 0 2.835.423 5.573 1.199 8.159-39.351 21.731-85.017 33.198-132.441 33.198-47.444 0-93.089-11.467-132.44-33.201.776-2.585 1.198-5.322 1.198-8.156 0-15.68-12.757-28.436-28.437-28.436-2.932 0-5.762.447-8.425 1.274-17.581-31.599-28.741-67.977-32.337-105.629-.394-4.124-4.059-7.155-8.179-6.753-4.123.393-7.146 4.056-6.753 8.179 3.213 33.646 12.176 66.354 26.141 95.88-33.538-35.48-51.768-79.081-51.768-124.908zm67.885 160.392c0-7.409 6.027-13.436 13.436-13.436s13.437 6.028 13.437 13.436-6.027 13.436-13.437 13.436c-7.409 0-13.436-6.027-13.436-13.436zm48.287 28.913c38.003 18.01 80.702 27.445 124.828 27.445 44.115 0 86.833-9.446 124.845-27.461-35.474 33.499-79.073 51.711-124.845 51.711-45.762 0-89.357-18.207-124.828-51.695zm284.507-15.477c-7.409 0-13.437-6.027-13.437-13.436s6.027-13.436 13.437-13.436c7.409 0 13.436 6.028 13.436 13.436s-6.027 13.436-13.436 13.436z" />
													</g>
												</g>
											</svg>
										</Link>
									</div>
									<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
										<NavContent name="Hot" />
										<NavContent name="Teams" />
										<NavContent name="Project" />
										<NavContent name="Calendar" />
									</div>
								</div>
								{/* <div className="hidden sm:ml-6 sm:flex sm:items-center">
									<Menu as="div" className="ml-3 relative">
										{({ open }) => (
											<>
												<div>
													<Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
														<span className="sr-only">Open user menu</span>
														<Image
															className="rounded-md"
															src={icon}
															alt="Picture of the author"
															width="30"
															height="30"
														/>
													</Menu.Button>
												</div>
												<Transition
													show={open}
													as={Fragment}
													enter="transition ease-out duration-200"
													enterFrom="transform opacity-0 scale-95"
													enterTo="transform opacity-100 scale-100"
													leave="transition ease-in duration-75"
													leaveFrom="transform opacity-100 scale-100"
													leaveTo="transform opacity-0 scale-95"
												>
													<Menu.Items
														static
														className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
													>
														<Menu.Item>
															{({ active }) => (
																<a
																	href="#"
																	className={classNames(
																		active ? "bg-gray-100" : "",
																		"block px-4 py-2 text-sm text-gray-700"
																	)}
																>
																	Your Profile
																</a>
															)}
														</Menu.Item>
														<Menu.Item>
															{({ active }) => (
																<a
																	href="#"
																	className={classNames(
																		active ? "bg-gray-100" : "",
																		"block px-4 py-2 text-sm text-gray-700"
																	)}
																>
																	Settings
																</a>
															)}
														</Menu.Item>
														<Menu.Item>
															{({ active }) => (
																<a
																	href="#"
																	className={classNames(
																		active ? "bg-gray-100" : "",
																		"block px-4 py-2 text-sm text-gray-700"
																	)}
																>
																	Sign out
																</a>
															)}
														</Menu.Item>
													</Menu.Items>
												</Transition>
											</>
										)}
									</Menu> 
								</div> */}
								<div className="-mr-2 flex items-center sm:hidden">
									{/* Mobile menu button */}
									<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
										<span className="sr-only">Open main menu</span>
										{open ? (
											<XIcon className="block h-6 w-6" aria-hidden="true" />
										) : (
											<MenuIcon className="block h-6 w-6" aria-hidden="true" />
										)}
									</Disclosure.Button>
								</div>
							</div>
						</div>

						<Disclosure.Panel className="sm:hidden">
							<div className="pt-2 pb-3 space-y-1">
								<NavContent name="Dashbord" hamburger />
								<NavContent name="Team" hamburger />
								<NavContent name="Projects" hamburger />
								<NavContent name="Calendar" hamburger />
							</div>
							{/* 
							<div className="pt-4 pb-3 border-t border-gray-200">
								<div className="flex items-center px-4">
									<div className="flex-shrink-0">
										<Image
											className="rounded-md"
											src={icon}
											alt="Picture of the author"
											width="40"
											height="40"
										/>
									</div>
									<div className="ml-3">
										<div className="text-base font-medium text-gray-800">
											Fox
										</div>
										<div className="text-sm font-medium text-gray-500">
											fox@example.com
										</div>
									</div>
									<button className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
										<span className="sr-only">View notifications</span>
										<BellIcon className="h-6 w-6" aria-hidden="true" />
									</button>
								</div>

															
								<div className="mt-3 space-y-1">
									<a
										href="#"
										className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
									>
										Your Profile
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
									>
										Settings
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
									>
										Sign out
									</a>
								</div>
							</div> */}
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</header>
	);
});
