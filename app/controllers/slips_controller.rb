class SlipsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_slip, only: [:show, :edit, :update, :destroy]

  # GET /slips
  # GET /slips.json

  def print
    print_params = params[:print_slips].split(',')
    @print_slips = Slip.find(print_params)
    render :print, :layout => 'print_layout'
  end

  def index
    @slips = Slip.all
    @slip = Slip.new

  end

  # GET /slips/1
  # GET /slips/1.json
  def show
  end

  # GET /slips/new
  def new
    @slip = Slip.new
  end

  # GET /slips/1/edit
  def edit
  end

  # POST /slips
  # POST /slips.json
  def create
    @slip = Slip.new(slip_params)

    respond_to do |format|
      if @slip.save
        # format.html { redirect_to @slip, notice: 'Slip was successfully created.' }
        format.js { }
      else
        # format.html { render :new }
        # format.js { render json: @slip.errors.full_messages, status: :unprocessable_entity }
        # format.js { render :partial => "errors.js.erb", :locals => {:errors => @slip.errors.full_messages} }
        format.js { render :file => "/slips/errors.js.erb", :locals => {:errors => @slip.errors.full_messages} }

      end
    end
  end

  # PATCH/PUT /slips/1
  # PATCH/PUT /slips/1.json
  def update
    respond_to do |format|
      if @slip.update(slip_params)
        format.html { redirect_to @slip, notice: 'Slip was successfully updated.' }
        format.js { }
      else
        format.html { render :edit }
        format.json { render json: @slip.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /slips/1
  # DELETE /slips/1.json
  def destroy
    @slip.destroy
    respond_to do |format|
      format.html { redirect_to slips_url, notice: 'Slip was successfully destroyed.' }
      format.js { }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_slip
      @slip = Slip.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def slip_params
      params.require(:slip).permit(:image, :value, :from, :description, :city, :date, :signature, :cpf, :rg)
    end
end
