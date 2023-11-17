function exf(s, n) {
    for (let i = 0; i < n; i++) {
        console.log(s);
    }
}

// Create a function to mock console.log
const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation();

// Test cases for the exf function
describe('exf function', () => {
    beforeEach(() => {
        mockConsoleLog.mockClear();
    });

    it('prints "echo" 5 times', () => {
        exf("echo", 5);
        expect(mockConsoleLog).toHaveBeenCalledTimes(5);
        expect(mockConsoleLog).toHaveBeenCalledWith('echo');
    });

    it('prints "JS from server" 10 times', () => {
        exf("JS from server", 10);
        expect(mockConsoleLog).toHaveBeenCalledTimes(10);
        expect(mockConsoleLog).toHaveBeenCalledWith('JS from server');
    });
});