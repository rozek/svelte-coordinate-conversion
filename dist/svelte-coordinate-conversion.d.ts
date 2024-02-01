type Position = {
    left: number;
    top: number;
};
/**** fromViewportTo ****/
declare function fromViewportTo(System: 'document' | 'local', originalPosition: Position, Target?: Element): Position;
/**** fromDocumentTo ****/
declare function fromDocumentTo(System: 'viewport' | 'local', originalPosition: Position, Target?: Element): Position;
/**** fromLocalTo ****/
declare function fromLocalTo(System: 'viewport' | 'document', originalPosition: Position, Source?: Element): Position;
declare const _default: {
    fromViewportTo: typeof fromViewportTo;
    fromDocumentTo: typeof fromDocumentTo;
    fromLocalTo: typeof fromLocalTo;
};
export default _default;
