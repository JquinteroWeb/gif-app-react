import { renderHook , waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFecthGifs";

describe('Pruebas en el custom hook', () => {
    test('Debe de regresar el estado inicial', () => {
        const { result } = renderHook(() =>
            useFetchGifs('One punch')
        );
        const { images, isLoading } = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy;
    });

    test('Debe de regresar un arreglo de imagenes y el isloading en false', async() => {
        const { result } = renderHook(() =>
            useFetchGifs('One punch')
        );

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),{
                timeout:6000
            }
        );

        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).not.toBeFalsy;
    });
})
