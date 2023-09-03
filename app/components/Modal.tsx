import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiFillCloseCircle } from "react-icons/ai";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal(props: ModalProps) {
  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={props.onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-zinc-950/80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center py-12 text-center md:px-12">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-8"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-8"
            >
              <Dialog.Panel
                className="h-full w-full max-w-5xl overflow-hidden rounded-lg 
              bg-zinc-100 p-8 text-left align-bottom shadow-xl transition-all dark:bg-zinc-900"
              >
                <button
                  aria-label="Close panel"
                  className="fixed right-4 top-4 rounded-full text-4xl text-primary focus:outline-none"
                  onClick={props.onClose}
                >
                  <AiFillCloseCircle />
                </button>
                {/* tailwind typography automatically styles remote markdown received as children using prose */}
                <article
                  className="prose max-w-none dark:prose-invert prose-a:my-2 prose-a:rounded-lg prose-a:px-3
                  prose-a:py-2 prose-a:no-underline
                  prose-img:rounded-lg prose-img:shadow-lg 
                  dark:prose-a:bg-zinc-700"
                >
                  {props.children}
                </article>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
