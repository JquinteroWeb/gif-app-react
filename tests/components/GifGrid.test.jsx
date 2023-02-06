import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFecthGifs";
jest.mock('../../src/hooks/useFecthGifs');
describe('Pruebas en GifGrid', () => {
    const category = 'One Punch';
    test('Debe mostrar loading inicialmente  ', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Loading....'));
        expect(screen.getByText(category));
        screen.debug();
    });

    test('Debe mostrar items cuando se cargan del custom hook useFetchGrifs', () => {
        const gifs = [
            {
                id: 'abc',
                title: 'Dragon',
                url: 'http://localhost/Dragon.jpg'
            },
            {
                id: '123',
                title: 'Dragon',
                url: 'http://localhost/Dragon.jpg'
            },
        ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
    });
})