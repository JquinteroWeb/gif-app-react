import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItiem />', () => {

    const title = 'Dragon ball';
    const url = 'https://github.com/';
    
    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el url y el ALT indicado', () => {
        render(<GifItem title={title} url={url} />);
        //screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);        
        const {src , alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe mostrar titulo', () => {
        render(<GifItem title={title} url={url} />);       
        expect(screen.getByText(title)).toBeTruthy();   
    });
});