import { useEffect } from 'react';
import 'react-multi-carousel/lib/styles.css';

export default function GameDisc(props) {
    useEffect(() => {
        if (!props.texture || props.texture.trim() === '')
            return;

        const modelViewer = document.querySelector('model-viewer#disc_' + props.id);

        modelViewer.addEventListener('load', () => {
            const material = modelViewer.model.materials[1];

            const createAndApplyTexture = async () => {
                // Creates a new texture.
                const texture = await modelViewer.createTexture(props.texture);

                // Applies the new texture to the specified channel.
                material.pbrMetallicRoughness['baseColorTexture'].setTexture(texture);
            };

            createAndApplyTexture();
        });

        modelViewer.addEventListener('camera-change', () => {
            if (!props.focused)
                modelViewer.resetTurntableRotation(0);
        });
    }, []);

    return (
        <model-viewer
            style={{
                filter: 'drop-shadow(0 0 0.25rem black)',
                margin: '0 auto',
                minHeight: 250,
                maxHeight: 250,
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%'
            }}
            interaction='none'
            id={'disc_' + props.id}
            alt='game disc'
            src={'/projects-site/cd.glb'}
            auto-rotate={props.focused}
            camera-orbit={props.focused ? '0deg 75deg 4m' : '0deg 75deg 6m'}
            max-camera-orbit={'Infinity 157.5deg 20m'}
            rotation-per-second={props.focused ? '45deg' : '0deg'}></model-viewer>
    );
}
