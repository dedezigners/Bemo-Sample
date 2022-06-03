<?php

namespace App\Http\Controllers;

use App\Models\Card;
use Illuminate\Http\Request;
use App\Http\Resources\CardResource;

class CardController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $column_id = $request->column_id;
        $cardCount = Card::where('column_id', $column_id)->count();
        $request['position'] = $cardCount;
        // return response()->json($request->all(), 400);
        $card = Card::create($request->all());
        return new CardResource($card);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Card  $card
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Card $card)
    {
        // return response()->json($request->all());
        $card->update($request->all());
        return new CardResource($card);

    }

    public function updatePosition(Request $request, Card $card)
    {
        $r = $request->all();
        
        $card->position = $r['new_index'];
        $card->save();

        if ($r['old_index'] > $r['new_index']) {
            // $data = [];
            for ($i = $r['new_index']; $i < $r['old_index']; $i++) { 
                $oCard = Card::where([
                    ['column_id', '=', $card->column_id],
                    ['position', '=', $i],
                    ['id', '!=', $card->id]
                ])->first();

                if ($oCard) {
                    $oCard->position = $i + 1;
                    $oCard->save();
                }
            }
        } elseif ($r['old_index'] < $r['new_index']) {
            for ($i = $r['old_index']; $i < $r['new_index']; $i++) { 
                $oCard = Card::where([
                    ['column_id', '=', $card->column_id],
                    ['position', '=', $i],
                    ['id', '!=', $card->id]
                ])->first();

                if ($oCard) {
                    $oCard->position = $i + 1;
                    $oCard->save();
                }
            }
        }

        return response()->json('updated');
    }

    public function remvoedCard(Request $request, Card $card)
    {
        // return response()->json($request->all());
        $old_index = $request->old_index;
        return $old_index;

        $count = Card::where('column_id', $card->column_id)->count();

        for ($i = ($old_index + 1); $i < $count; $i++) { 
            $oCard = Card::where([
                ['column_id', '=', $card->column_id],
                ['position', '=', $i],
                ['id', '!=', $card->id]
            ])->first();

            if ($oCard) {
                $oCard->position = $i - 1;
                $oCard->save();
            }
        }
    }

    public function addedCard(Request $request, Card $card)
    {
        $column_id = $request->column_id;
        $card->column_id = $column_id;
        $card->position = $request->new_index;
        $card->save();
        
        $count = Card::where('column_id', $column_id)->count();
        return response()->json($count);

        // for ($i = ($old_index + 1); $i < $count; $i++) { 
        //     $oCard = Card::where([
        //         ['column_id', '=', $card->column_id],
        //         ['position', '=', $i],
        //         ['id', '!=', $card->id]
        //     ])->first();

        //     if ($oCard) {
        //         $oCard->position = $i - 1;
        //         $oCard->save();
        //     }
        // }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Card  $card
     * @return \Illuminate\Http\Response
     */
    public function destroy(Card $card)
    {
        //
    }
}
