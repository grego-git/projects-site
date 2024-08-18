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
            class='cd-model-viewer'
            interaction='none'
            id={'disc_' + props.id}
            alt='game disc'
            src={process.env.PUBLIC_URL + 'cd.glb'}
            auto-rotate={props.focused}
            camera-orbit={props.focused ? '0deg 75deg 4m' : '0deg 75deg 6m'}
            max-camera-orbit={'Infinity 157.5deg 20m'}
            rotation-per-second={props.focused ? '45deg' : '0deg'}></model-viewer>
    );
}
