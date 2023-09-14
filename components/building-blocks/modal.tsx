import React, { useEffect, useState } from 'react';
import { GalleryItems } from '../sections/gallery';

interface CloseableModalProps {
    imageUrls: GalleryItems;
}

export function useCollapsableModal() {
    const [showModal, setShowModal] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = () => {
        console.log("clicked");
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        console.log(showModal, "show modal")
    }, [showModal])
    return {
        showModal,
        setShowModal,
        currentImageIndex,
        setCurrentImageIndex,
        openModal,
        closeModal
    }
}

const CloseableModal: React.FC<CloseableModalProps> = ({ imageUrls }) => {
    const { showModal, setShowModal, closeModal } = useCollapsableModal();
    const { currentImageIndex, setCurrentImageIndex } = useCollapsableModal();

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    };

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 flex justify-center items-center z-50">
                    {/* Background overlay */}
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-40"
                        onClick={closeModal}
                    ></div>

                    {/* Modal content */}
                    {showModal && (
                        <div className="fixed z-50 bg-white rounded-lg shadow-lg p-4 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                            <div className="flex justify-between">
                                <button
                                    className="text-gray-600 hover:text-gray-800"
                                    onClick={goToPreviousImage}
                                >
                                    Previous
                                </button>
                                <button
                                    className="text-gray-600 hover:text-gray-800"
                                    onClick={goToNextImage}
                                >
                                    Next
                                </button>
                            </div>
                            <img
                                src={imageUrls[currentImageIndex].original}
                                alt="Modal"
                                className="w-full h-auto"
                                onClick={() => setShowModal(true)}
                            />
                        </div>
                    )}

                </div>
            )}
        </>
    );
};

export default CloseableModal;
